---
hide:
  - toc
title: hotio/sabnzbd
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/sabnzbd/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  

<div id="tags-table">
  <table>
    <thead>
      <tr>
        <th>Tags <span class="twemoji" title="Click Tag to Copy"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 9h2V7h-2m1 13c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2m-1 15h2v-6h-2z"></path></svg></span></th>
        <th>Description</th>
        <th>Commit</th>
        <th>Last Updated</th>
      </tr>
    </thead>
    <tbody id="tags-table-body">
<tr><td><div id="tag12248" onclick="CopyToClipboard('tag12248');return false;" class="tag-decoration">nightly</div><div id="tag10760" onclick="CopyToClipboard('tag10760');return false;" class="tag-decoration">nightly-91dc612</div><div id="tag1372" onclick="CopyToClipboard('tag1372');return false;" class="tag-decoration">nightly-45aafe07744f12852e3731bd99e9f72064c47998</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/91dc6129a5bdf75dfbae3b88bfc6184ead2f4107" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/27280226096" target="_blank">2026-06-10 13:36:56</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag21346" onclick="CopyToClipboard('tag21346');return false;" class="tag-decoration">release</div><div id="tag16752" onclick="CopyToClipboard('tag16752');return false;" class="tag-decoration">release-d9901aa</div><div id="tag6737" onclick="CopyToClipboard('tag6737');return false;" class="tag-decoration">release-5.0.3</div><div id="tag7046" onclick="CopyToClipboard('tag7046');return false;" class="tag-decoration">release-v5</div><div id="tag17538" onclick="CopyToClipboard('tag17538');return false;" class="tag-decoration">release-v5.0</div><div id="tag21683" onclick="CopyToClipboard('tag21683');return false;" class="tag-decoration">release-v5.0.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/d9901aa1c30a39f40fe1fd6e520d4d8a5d2c2577" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/26334082571" target="_blank">2026-05-23 13:34:17</a></td></tr>
<tr><td><div id="tag11445" onclick="CopyToClipboard('tag11445');return false;" class="tag-decoration">testing</div><div id="tag19297" onclick="CopyToClipboard('tag19297');return false;" class="tag-decoration">testing-2703dc2</div><div id="tag14963" onclick="CopyToClipboard('tag14963');return false;" class="tag-decoration">testing-5.0.4RC1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/2703dc28bdbac36a8721d614baa0393addc4f30b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/27280224072" target="_blank">2026-06-10 13:36:54</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="sabnzbd" \
        -p 8080:8080 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e WEBUI_PORTS="8080/tcp" \ #(3)!
        -e ARGS="" \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/sabnzbd
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      sabnzbd:
        container_name: sabnzbd
        image: ghcr.io/hotio/sabnzbd
        ports:
          - "8080:8080"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8080/tcp #(3)!
          - ARGS
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"

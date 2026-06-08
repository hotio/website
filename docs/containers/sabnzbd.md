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
<tr><td><div id="tag30339" onclick="CopyToClipboard('tag30339');return false;" class="tag-decoration">nightly</div><div id="tag20739" onclick="CopyToClipboard('tag20739');return false;" class="tag-decoration">nightly-cf00c0f</div><div id="tag21019" onclick="CopyToClipboard('tag21019');return false;" class="tag-decoration">nightly-83d167415a0fd0c4c57b6bdc9407836ef7b2cc13</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/cf00c0f41af11d580554cea7945ab66ebf15420a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/27156467447" target="_blank">2026-06-08 17:51:54</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag21849" onclick="CopyToClipboard('tag21849');return false;" class="tag-decoration">release</div><div id="tag20269" onclick="CopyToClipboard('tag20269');return false;" class="tag-decoration">release-d9901aa</div><div id="tag20540" onclick="CopyToClipboard('tag20540');return false;" class="tag-decoration">release-5.0.3</div><div id="tag30278" onclick="CopyToClipboard('tag30278');return false;" class="tag-decoration">release-v5</div><div id="tag20486" onclick="CopyToClipboard('tag20486');return false;" class="tag-decoration">release-v5.0</div><div id="tag20001" onclick="CopyToClipboard('tag20001');return false;" class="tag-decoration">release-v5.0.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/d9901aa1c30a39f40fe1fd6e520d4d8a5d2c2577" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/26334082571" target="_blank">2026-05-23 13:34:17</a></td></tr>
<tr><td><div id="tag29988" onclick="CopyToClipboard('tag29988');return false;" class="tag-decoration">testing</div><div id="tag32145" onclick="CopyToClipboard('tag32145');return false;" class="tag-decoration">testing-65daef7</div><div id="tag13057" onclick="CopyToClipboard('tag13057');return false;" class="tag-decoration">testing-5.0.4RC1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/65daef7db77a32e4201c0a892315d23aae1b6951" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/27092387403" target="_blank">2026-06-07 12:20:06</a></td></tr>
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

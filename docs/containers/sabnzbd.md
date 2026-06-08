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
<tr><td><div id="tag18764" onclick="CopyToClipboard('tag18764');return false;" class="tag-decoration">nightly</div><div id="tag30861" onclick="CopyToClipboard('tag30861');return false;" class="tag-decoration">nightly-1c8faf4</div><div id="tag31193" onclick="CopyToClipboard('tag31193');return false;" class="tag-decoration">nightly-740eb442a8ab62081674b9b617bd1c5a630d4b84</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/1c8faf4b62dcc735e964d095f38ffe36fdf183be" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/27170914858" target="_blank">2026-06-08 22:25:39</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag9614" onclick="CopyToClipboard('tag9614');return false;" class="tag-decoration">release</div><div id="tag21856" onclick="CopyToClipboard('tag21856');return false;" class="tag-decoration">release-d9901aa</div><div id="tag22361" onclick="CopyToClipboard('tag22361');return false;" class="tag-decoration">release-5.0.3</div><div id="tag13771" onclick="CopyToClipboard('tag13771');return false;" class="tag-decoration">release-v5</div><div id="tag11584" onclick="CopyToClipboard('tag11584');return false;" class="tag-decoration">release-v5.0</div><div id="tag14436" onclick="CopyToClipboard('tag14436');return false;" class="tag-decoration">release-v5.0.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/d9901aa1c30a39f40fe1fd6e520d4d8a5d2c2577" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/26334082571" target="_blank">2026-05-23 13:34:17</a></td></tr>
<tr><td><div id="tag29572" onclick="CopyToClipboard('tag29572');return false;" class="tag-decoration">testing</div><div id="tag17372" onclick="CopyToClipboard('tag17372');return false;" class="tag-decoration">testing-65daef7</div><div id="tag32231" onclick="CopyToClipboard('tag32231');return false;" class="tag-decoration">testing-5.0.4RC1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/65daef7db77a32e4201c0a892315d23aae1b6951" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/27092387403" target="_blank">2026-06-07 12:20:06</a></td></tr>
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

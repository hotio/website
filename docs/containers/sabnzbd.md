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
<tr><td><div id="tag4146" onclick="CopyToClipboard('tag4146');return false;" class="tag-decoration">nightly</div><div id="tag9972" onclick="CopyToClipboard('tag9972');return false;" class="tag-decoration">nightly-03b60f3</div><div id="tag26143" onclick="CopyToClipboard('tag26143');return false;" class="tag-decoration">nightly-afae687b6ad1944158d8cd990b5aa0befb8ca502</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/03b60f3797427e1fada41dd4c3c11466774db75c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/27218593957" target="_blank">2026-06-09 15:54:18</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag8467" onclick="CopyToClipboard('tag8467');return false;" class="tag-decoration">release</div><div id="tag15574" onclick="CopyToClipboard('tag15574');return false;" class="tag-decoration">release-d9901aa</div><div id="tag19668" onclick="CopyToClipboard('tag19668');return false;" class="tag-decoration">release-5.0.3</div><div id="tag1398" onclick="CopyToClipboard('tag1398');return false;" class="tag-decoration">release-v5</div><div id="tag21064" onclick="CopyToClipboard('tag21064');return false;" class="tag-decoration">release-v5.0</div><div id="tag7388" onclick="CopyToClipboard('tag7388');return false;" class="tag-decoration">release-v5.0.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/d9901aa1c30a39f40fe1fd6e520d4d8a5d2c2577" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/26334082571" target="_blank">2026-05-23 13:34:17</a></td></tr>
<tr><td><div id="tag18434" onclick="CopyToClipboard('tag18434');return false;" class="tag-decoration">testing</div><div id="tag7203" onclick="CopyToClipboard('tag7203');return false;" class="tag-decoration">testing-65daef7</div><div id="tag17136" onclick="CopyToClipboard('tag17136');return false;" class="tag-decoration">testing-5.0.4RC1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/65daef7db77a32e4201c0a892315d23aae1b6951" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/27092387403" target="_blank">2026-06-07 12:20:06</a></td></tr>
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

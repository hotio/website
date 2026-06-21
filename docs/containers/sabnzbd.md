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
<tr><td><div id="tag17545" onclick="CopyToClipboard('tag17545');return false;" class="tag-decoration">nightly</div><div id="tag3002" onclick="CopyToClipboard('tag3002');return false;" class="tag-decoration">nightly-ea2289b</div><div id="tag19238" onclick="CopyToClipboard('tag19238');return false;" class="tag-decoration">nightly-7daa0159ec76fdee6bcfa81620a4300aee924d40</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/ea2289b65c3368920ffa5db3cea02eed047a75b9" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/27915032575" target="_blank">2026-06-21 19:28:14</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag10384" onclick="CopyToClipboard('tag10384');return false;" class="tag-decoration">release</div><div id="tag8046" onclick="CopyToClipboard('tag8046');return false;" class="tag-decoration">release-b5803e2</div><div id="tag10470" onclick="CopyToClipboard('tag10470');return false;" class="tag-decoration">release-5.0.4</div><div id="tag3215" onclick="CopyToClipboard('tag3215');return false;" class="tag-decoration">release-v5</div><div id="tag17983" onclick="CopyToClipboard('tag17983');return false;" class="tag-decoration">release-v5.0</div><div id="tag32716" onclick="CopyToClipboard('tag32716');return false;" class="tag-decoration">release-v5.0.4</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/b5803e2d3911042a0fbf90df5ef1745d023f898b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/27873374219" target="_blank">2026-06-20 14:00:44</a></td></tr>
<tr><td><div id="tag8655" onclick="CopyToClipboard('tag8655');return false;" class="tag-decoration">testing</div><div id="tag12419" onclick="CopyToClipboard('tag12419');return false;" class="tag-decoration">testing-f555411</div><div id="tag31972" onclick="CopyToClipboard('tag31972');return false;" class="tag-decoration">testing-5.1.0Beta1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/f555411b9785388df7b07bd79d5dc2d89998bbb1" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/27873374952" target="_blank">2026-06-20 14:00:45</a></td></tr>
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

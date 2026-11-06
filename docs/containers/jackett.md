---
hide:
  - toc
title: hotio/jackett
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/jackett){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/jackett){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/jackett/jackett){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag17630" onclick="CopyToClipboard('tag17630');return false;" class="tag-decoration">release</div><div id="tag20600" onclick="CopyToClipboard('tag20600');return false;" class="tag-decoration">release-fe00ff5</div><div id="tag11596" onclick="CopyToClipboard('tag11596');return false;" class="tag-decoration">release-0.24.3021</div><div id="tag23022" onclick="CopyToClipboard('tag23022');return false;" class="tag-decoration">release-v0</div><div id="tag15773" onclick="CopyToClipboard('tag15773');return false;" class="tag-decoration">release-v0.24</div><div id="tag22458" onclick="CopyToClipboard('tag22458');return false;" class="tag-decoration">release-v0.24.3021</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/fe00ff543670edfe4fba54e6884556e016932481" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/42203161411" target="_blank">2026-11-06 10:30:13</a></td></tr>
<tr><td><div id="tag32767" onclick="CopyToClipboard('tag32767');return false;" class="tag-decoration">testing</div><div id="tag465" onclick="CopyToClipboard('tag465');return false;" class="tag-decoration">testing-6288b0e</div><div id="tag13254" onclick="CopyToClipboard('tag13254');return false;" class="tag-decoration">testing-0.24.3021</div><div id="tag2788" onclick="CopyToClipboard('tag2788');return false;" class="tag-decoration">testing-v0</div><div id="tag11903" onclick="CopyToClipboard('tag11903');return false;" class="tag-decoration">testing-v0.24</div><div id="tag10239" onclick="CopyToClipboard('tag10239');return false;" class="tag-decoration">testing-v0.24.3021</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/6288b0e75001881e9ef14164e090b657d067ea35" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/42305735707" target="_blank">2026-11-06 22:34:20</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="jackett" \
        -p 9117:9117 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="9117/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/jackett
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      jackett:
        container_name: jackett
        image: ghcr.io/hotio/jackett
        ports:
          - "9117:9117"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=9117/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"

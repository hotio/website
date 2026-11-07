---
hide:
  - toc
title: hotio/prowlarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/prowlarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/prowlarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/prowlarr/prowlarr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag1603" onclick="CopyToClipboard('tag1603');return false;" class="tag-decoration">nightly</div><div id="tag9808" onclick="CopyToClipboard('tag9808');return false;" class="tag-decoration">nightly-f0f5d12</div><div id="tag31924" onclick="CopyToClipboard('tag31924');return false;" class="tag-decoration">nightly-3.0.1.5748</div></td><td>nightly</td><td><a href="https://github.com/hotio/prowlarr/commit/f0f5d121d77859b41a1f5a46469b696823e27775" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/42324060523" target="_blank">2026-11-07 01:26:13</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag3301" onclick="CopyToClipboard('tag3301');return false;" class="tag-decoration">release</div><div id="tag29222" onclick="CopyToClipboard('tag29222');return false;" class="tag-decoration">release-0d92a48</div><div id="tag10642" onclick="CopyToClipboard('tag10642');return false;" class="tag-decoration">release-2.7.0.5723</div></td><td>master</td><td><a href="https://github.com/hotio/prowlarr/commit/0d92a4802111cf5652d940679d4a1b66ac74ce10" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/42114884567" target="_blank">2026-11-05 21:41:14</a></td></tr>
<tr><td><div id="tag4345" onclick="CopyToClipboard('tag4345');return false;" class="tag-decoration">testing</div><div id="tag24719" onclick="CopyToClipboard('tag24719');return false;" class="tag-decoration">testing-51f0206</div><div id="tag2723" onclick="CopyToClipboard('tag2723');return false;" class="tag-decoration">testing-3.0.0.5737</div></td><td>develop</td><td><a href="https://github.com/hotio/prowlarr/commit/51f0206b46d03d986483c83f86e4d6547036e0ec" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/42114880604" target="_blank">2026-11-05 21:41:12</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="prowlarr" \
        -p 9696:9696 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="9696/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/prowlarr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      prowlarr:
        container_name: prowlarr
        image: ghcr.io/hotio/prowlarr
        ports:
          - "9696:9696"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=9696/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"

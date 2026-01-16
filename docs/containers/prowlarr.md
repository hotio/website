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
<tr><td><div id="tag24167" onclick="CopyToClipboard('tag24167');return false;" class="tag-decoration">nightly</div><div id="tag17538" onclick="CopyToClipboard('tag17538');return false;" class="tag-decoration">nightly-aefece8</div><div id="tag852" onclick="CopyToClipboard('tag852');return false;" class="tag-decoration">nightly-2.3.2.5251</div></td><td>nightly</td><td><a href="https://github.com/hotio/prowlarr/commit/aefece836027f6bf790fcc2f41a3cff4b608d715" target="_blank">Upstream update: alpinevpn-e7368e6 => alpinevpn-156b37c</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/21060544888" target="_blank">2026-01-16 08:33:44</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag21675" onclick="CopyToClipboard('tag21675');return false;" class="tag-decoration">release</div><div id="tag18717" onclick="CopyToClipboard('tag18717');return false;" class="tag-decoration">release-e0fe5ab</div><div id="tag9817" onclick="CopyToClipboard('tag9817');return false;" class="tag-decoration">release-2.3.0.5236</div></td><td>master</td><td><a href="https://github.com/hotio/prowlarr/commit/e0fe5ab1abe13e0803b43c5404bee46193d5701f" target="_blank">Upstream update: alpinevpn-e7368e6 => alpinevpn-156b37c</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/21060545715" target="_blank">2026-01-16 08:33:46</a></td></tr>
<tr><td><div id="tag24536" onclick="CopyToClipboard('tag24536');return false;" class="tag-decoration">testing</div><div id="tag25530" onclick="CopyToClipboard('tag25530');return false;" class="tag-decoration">testing-73cd1ba</div><div id="tag24367" onclick="CopyToClipboard('tag24367');return false;" class="tag-decoration">testing-2.3.2.5245</div></td><td>develop</td><td><a href="https://github.com/hotio/prowlarr/commit/73cd1bab0c80ba624d39fdefbf57e1ee63fbcdc1" target="_blank">Upstream update: alpinevpn-e7368e6 => alpinevpn-156b37c</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/21060546153" target="_blank">2026-01-16 08:33:47</a></td></tr>
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

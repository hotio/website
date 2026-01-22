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
<tr><td><div id="tag24418" onclick="CopyToClipboard('tag24418');return false;" class="tag-decoration">nightly</div><div id="tag16641" onclick="CopyToClipboard('tag16641');return false;" class="tag-decoration">nightly-7e23f9f</div><div id="tag24922" onclick="CopyToClipboard('tag24922');return false;" class="tag-decoration">nightly-2.3.2.5251</div></td><td>nightly</td><td><a href="https://github.com/hotio/prowlarr/commit/7e23f9f084a55cbe007b526a5cea3ace08c73e47" target="_blank">Upstream update: alpinevpn-5648cae => alpinevpn-3f254df</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/21246761223" target="_blank">2026-01-22 11:29:16</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag21836" onclick="CopyToClipboard('tag21836');return false;" class="tag-decoration">release</div><div id="tag12725" onclick="CopyToClipboard('tag12725');return false;" class="tag-decoration">release-29e8e96</div><div id="tag12995" onclick="CopyToClipboard('tag12995');return false;" class="tag-decoration">release-2.3.0.5236</div></td><td>master</td><td><a href="https://github.com/hotio/prowlarr/commit/29e8e9689b0d54b4365929c5063a82beed0e2652" target="_blank">Upstream update: alpinevpn-489d5d6 => alpinevpn-5648cae</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/21244709695" target="_blank">2026-01-22 10:19:28</a></td></tr>
<tr><td><div id="tag22891" onclick="CopyToClipboard('tag22891');return false;" class="tag-decoration">testing</div><div id="tag22727" onclick="CopyToClipboard('tag22727');return false;" class="tag-decoration">testing-c254429</div><div id="tag4046" onclick="CopyToClipboard('tag4046');return false;" class="tag-decoration">testing-2.3.2.5245</div></td><td>develop</td><td><a href="https://github.com/hotio/prowlarr/commit/c254429981cee05e53d9d7e5d0e529ee0c3996a8" target="_blank">Upstream update: alpinevpn-5648cae => alpinevpn-3f254df</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/21246763260" target="_blank">2026-01-22 11:29:20</a></td></tr>
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

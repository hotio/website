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
<tr><td><div id="tag31107" onclick="CopyToClipboard('tag31107');return false;" class="tag-decoration">nightly</div><div id="tag9516" onclick="CopyToClipboard('tag9516');return false;" class="tag-decoration">nightly-00cfd65</div><div id="tag24479" onclick="CopyToClipboard('tag24479');return false;" class="tag-decoration">nightly-2.3.2.5251</div></td><td>nightly</td><td><a href="https://github.com/hotio/prowlarr/commit/00cfd65152953049412e44aed0b46eeaafa0132e" target="_blank">Upstream update: alpinevpn-5063227 => alpinevpn-7a36f80</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/21132226036" target="_blank">2026-01-19 09:30:48</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag26600" onclick="CopyToClipboard('tag26600');return false;" class="tag-decoration">release</div><div id="tag14716" onclick="CopyToClipboard('tag14716');return false;" class="tag-decoration">release-d5bd538</div><div id="tag21672" onclick="CopyToClipboard('tag21672');return false;" class="tag-decoration">release-2.3.0.5236</div></td><td>master</td><td><a href="https://github.com/hotio/prowlarr/commit/d5bd538965456f4b365e04a62c6fa4681aa45c49" target="_blank">Upstream update: alpinevpn-5063227 => alpinevpn-7a36f80</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/21132226988" target="_blank">2026-01-19 09:30:50</a></td></tr>
<tr><td><div id="tag20729" onclick="CopyToClipboard('tag20729');return false;" class="tag-decoration">testing</div><div id="tag15116" onclick="CopyToClipboard('tag15116');return false;" class="tag-decoration">testing-ff93640</div><div id="tag31344" onclick="CopyToClipboard('tag31344');return false;" class="tag-decoration">testing-2.3.2.5245</div></td><td>develop</td><td><a href="https://github.com/hotio/prowlarr/commit/ff9364031a436b2e4bb3d049049eb221c259576e" target="_blank">Upstream update: alpinevpn-6480c7b => alpinevpn-5063227</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/21124045537" target="_blank">2026-01-19 03:13:41</a></td></tr>
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

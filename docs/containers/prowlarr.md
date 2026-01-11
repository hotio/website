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
<tr><td><div id="tag21524" onclick="CopyToClipboard('tag21524');return false;" class="tag-decoration">nightly</div><div id="tag9124" onclick="CopyToClipboard('tag9124');return false;" class="tag-decoration">nightly-2.3.2.5245</div><div id="tag11316" onclick="CopyToClipboard('tag11316');return false;" class="tag-decoration">nightly-4ea20bb</div></td><td>nightly</td><td><a href="https://github.com/hotio/prowlarr/commit/4ea20bbe87994b1d845fb6ebf40e013b1e64e403" target="_blank">Upstream update: alpinevpn-0904450 => alpinevpn-5b650ae</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/20892086921" target="_blank">2026-01-11 08:19:41</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag14429" onclick="CopyToClipboard('tag14429');return false;" class="tag-decoration">release</div><div id="tag30381" onclick="CopyToClipboard('tag30381');return false;" class="tag-decoration">release-2.3.0.5236</div><div id="tag26499" onclick="CopyToClipboard('tag26499');return false;" class="tag-decoration">release-ff2332b</div></td><td>master</td><td><a href="https://github.com/hotio/prowlarr/commit/ff2332b0b88f065409126167f3cbfde7eb6f62e9" target="_blank">Upstream update: alpinevpn-0904450 => alpinevpn-5b650ae</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/20892087169" target="_blank">2026-01-11 08:19:43</a></td></tr>
<tr><td><div id="tag22646" onclick="CopyToClipboard('tag22646');return false;" class="tag-decoration">testing</div><div id="tag2584" onclick="CopyToClipboard('tag2584');return false;" class="tag-decoration">testing-2.3.2.5245</div><div id="tag28136" onclick="CopyToClipboard('tag28136');return false;" class="tag-decoration">testing-08f123b</div></td><td>develop</td><td><a href="https://github.com/hotio/prowlarr/commit/08f123ba7eaa3e3db52c3e1bf49a250167d606a7" target="_blank">Upstream update: alpinevpn-0904450 => alpinevpn-5b650ae</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/20892087349" target="_blank">2026-01-11 08:19:44</a></td></tr>
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
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/prowlarr
    ```

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
        volumes:
          - /<host_folder_config>:/config
    ```

--8<-- "includes/wireguard.md"

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
<tr><td><div id="tag16956" onclick="CopyToClipboard('tag16956');return false;" class="tag-decoration">nightly</div><div id="tag27511" onclick="CopyToClipboard('tag27511');return false;" class="tag-decoration">nightly-9a442a0</div><div id="tag23867" onclick="CopyToClipboard('tag23867');return false;" class="tag-decoration">nightly-3.0.1.5752</div></td><td>nightly</td><td><a href="https://github.com/hotio/prowlarr/commit/9a442a09769437bcd1a9774bc5774335ac1a68ec" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/42442141578" target="_blank">2026-11-08 03:18:07</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag30431" onclick="CopyToClipboard('tag30431');return false;" class="tag-decoration">release</div><div id="tag17279" onclick="CopyToClipboard('tag17279');return false;" class="tag-decoration">release-03900a3</div><div id="tag23083" onclick="CopyToClipboard('tag23083');return false;" class="tag-decoration">release-2.7.0.5723</div></td><td>master</td><td><a href="https://github.com/hotio/prowlarr/commit/03900a3a525cf364fe67dc58aa3d329a380e6e4e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/42324063670" target="_blank">2026-11-07 01:26:15</a></td></tr>
<tr><td><div id="tag15142" onclick="CopyToClipboard('tag15142');return false;" class="tag-decoration">testing</div><div id="tag13481" onclick="CopyToClipboard('tag13481');return false;" class="tag-decoration">testing-5393edf</div><div id="tag17919" onclick="CopyToClipboard('tag17919');return false;" class="tag-decoration">testing-3.0.0.5737</div></td><td>develop</td><td><a href="https://github.com/hotio/prowlarr/commit/5393edf5a388258e213bd58f478d3aa0f9a7c07a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/42324060184" target="_blank">2026-11-07 01:26:13</a></td></tr>
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

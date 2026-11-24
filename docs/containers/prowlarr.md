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
<tr><td><div id="tag18362" onclick="CopyToClipboard('tag18362');return false;" class="tag-decoration">nightly</div><div id="tag15217" onclick="CopyToClipboard('tag15217');return false;" class="tag-decoration">nightly-134e4cc</div><div id="tag16803" onclick="CopyToClipboard('tag16803');return false;" class="tag-decoration">nightly-3.1.0.5797</div></td><td>nightly</td><td><a href="https://github.com/hotio/prowlarr/commit/134e4cc70ea1d181d273099e64a0839a3b60c8bb" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/45387394079" target="_blank">2026-11-24 11:47:22</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag10862" onclick="CopyToClipboard('tag10862');return false;" class="tag-decoration">release</div><div id="tag7622" onclick="CopyToClipboard('tag7622');return false;" class="tag-decoration">release-8dc2cac</div><div id="tag574" onclick="CopyToClipboard('tag574');return false;" class="tag-decoration">release-3.1.0.5799</div></td><td>master</td><td><a href="https://github.com/hotio/prowlarr/commit/8dc2cac1c4549327528547117da09322c1112b82" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/45304475833" target="_blank">2026-11-24 01:21:42</a></td></tr>
<tr><td><div id="tag17264" onclick="CopyToClipboard('tag17264');return false;" class="tag-decoration">testing</div><div id="tag13140" onclick="CopyToClipboard('tag13140');return false;" class="tag-decoration">testing-6f95b3b</div><div id="tag13694" onclick="CopyToClipboard('tag13694');return false;" class="tag-decoration">testing-3.1.0.5799</div></td><td>develop</td><td><a href="https://github.com/hotio/prowlarr/commit/6f95b3b3ae3db966a77676144153730af6cdec03" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/45304473174" target="_blank">2026-11-24 01:21:40</a></td></tr>
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

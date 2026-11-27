---
hide:
  - toc
title: hotio/qbitmanage
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/qbitmanage){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/qbitmanage){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/StuffAnThings/qbit_manage){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag405" onclick="CopyToClipboard('tag405');return false;" class="tag-decoration">nightly</div><div id="tag1502" onclick="CopyToClipboard('tag1502');return false;" class="tag-decoration">nightly-f9f7abb</div><div id="tag31132" onclick="CopyToClipboard('tag31132');return false;" class="tag-decoration">nightly-b5fedf29991e882d937841f4e0ad0291405ea920</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/f9f7abb509185ecc9aa3d44c49138a6dd9b3f9e6" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/45704438853" target="_blank">2026-11-25 21:26:53</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag25557" onclick="CopyToClipboard('tag25557');return false;" class="tag-decoration">release</div><div id="tag483" onclick="CopyToClipboard('tag483');return false;" class="tag-decoration">release-f2e986d</div><div id="tag18165" onclick="CopyToClipboard('tag18165');return false;" class="tag-decoration">release-4.15.0</div><div id="tag20786" onclick="CopyToClipboard('tag20786');return false;" class="tag-decoration">release-v4</div><div id="tag18474" onclick="CopyToClipboard('tag18474');return false;" class="tag-decoration">release-v4.15</div><div id="tag14693" onclick="CopyToClipboard('tag14693');return false;" class="tag-decoration">release-v4.15.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/f2e986d3179d781fed8e3772d85cc1ce8b201a1c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/46080827645" target="_blank">2026-11-27 23:08:57</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="qbitmanage" \
        -p 8080:8080 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="8080/tcp" \ #(3)!
        -e ARGS="" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/qbitmanage
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      qbitmanage:
        container_name: qbitmanage
        image: ghcr.io/hotio/qbitmanage
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

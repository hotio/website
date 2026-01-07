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
<tr><td><div id="tag12487" onclick="CopyToClipboard('tag12487');return false;" class="tag-decoration">nightly</div><div id="tag12416" onclick="CopyToClipboard('tag12416');return false;" class="tag-decoration">nightly-6aafba4bec8663d73ee63e2431df71256db1aaba</div><div id="tag3404" onclick="CopyToClipboard('tag3404');return false;" class="tag-decoration">nightly-12e1732</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/12e17328f548a8397a1d4af13fd5ad95bd568732" target="_blank">Upstream image update</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/20770103468" target="_blank">2026-01-07 03:57:39</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag1707" onclick="CopyToClipboard('tag1707');return false;" class="tag-decoration">release</div><div id="tag7694" onclick="CopyToClipboard('tag7694');return false;" class="tag-decoration">release-4.6.5</div><div id="tag2059" onclick="CopyToClipboard('tag2059');return false;" class="tag-decoration">release-e16c345</div><div id="tag9308" onclick="CopyToClipboard('tag9308');return false;" class="tag-decoration">release-v4</div><div id="tag29006" onclick="CopyToClipboard('tag29006');return false;" class="tag-decoration">release-v4.6</div><div id="tag3388" onclick="CopyToClipboard('tag3388');return false;" class="tag-decoration">release-v4.6.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/e16c34519227159bb5a6d055d08ca09e28795a1e" target="_blank">Upstream image update</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/20770103627" target="_blank">2026-01-07 03:57:40</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name qbitmanage \
        -p 8080:8080 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="8080/tcp" \
        -e ARGS="" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/qbitmanage
    ```

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
          - WEBUI_PORTS=8080/tcp
          - ARGS
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

--8<-- "includes/wireguard.md"

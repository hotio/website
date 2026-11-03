---
hide:
  - toc
title: hotio/stash
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/stash){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/stash){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/stashapp/stash){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag2760" onclick="CopyToClipboard('tag2760');return false;" class="tag-decoration">nightly</div><div id="tag8201" onclick="CopyToClipboard('tag8201');return false;" class="tag-decoration">nightly-8199a38</div><div id="tag18933" onclick="CopyToClipboard('tag18933');return false;" class="tag-decoration">nightly-944dd69436b7a944cd59e15871d31032fb3fa58a</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/8199a3890ff4e5526c997d4510c717d7925a3365" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/41559469739" target="_blank">2026-11-03 01:23:47</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag17677" onclick="CopyToClipboard('tag17677');return false;" class="tag-decoration">release</div><div id="tag9079" onclick="CopyToClipboard('tag9079');return false;" class="tag-decoration">release-59c92f5</div><div id="tag23300" onclick="CopyToClipboard('tag23300');return false;" class="tag-decoration">release-0.32.0</div><div id="tag22387" onclick="CopyToClipboard('tag22387');return false;" class="tag-decoration">release-v0</div><div id="tag5254" onclick="CopyToClipboard('tag5254');return false;" class="tag-decoration">release-v0.32</div><div id="tag32300" onclick="CopyToClipboard('tag32300');return false;" class="tag-decoration">release-v0.32.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/59c92f5288ae3d46b649606b6295f75f3ea32ba3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/41505115569" target="_blank">2026-11-02 18:55:25</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="stash" \
        -p 9999:9999 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="9999/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/stash
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      stash:
        container_name: stash
        image: ghcr.io/hotio/stash
        ports:
          - "9999:9999"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=9999/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"

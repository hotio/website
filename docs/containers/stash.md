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
<tr><td><div id="tag18364" onclick="CopyToClipboard('tag18364');return false;" class="tag-decoration">nightly</div><div id="tag3044" onclick="CopyToClipboard('tag3044');return false;" class="tag-decoration">nightly-46d51ad</div><div id="tag7247" onclick="CopyToClipboard('tag7247');return false;" class="tag-decoration">nightly-9b21f2bb282b0393f64ca21262e4cb44e3a5a791</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/46d51ada6319ce79c92303837d5334f1bcc72e1b" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/stash/actions/runs/25988083461" target="_blank">2026-05-17 10:16:29</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag24687" onclick="CopyToClipboard('tag24687');return false;" class="tag-decoration">release</div><div id="tag32356" onclick="CopyToClipboard('tag32356');return false;" class="tag-decoration">release-a157e67</div><div id="tag14458" onclick="CopyToClipboard('tag14458');return false;" class="tag-decoration">release-0.31.1</div><div id="tag19575" onclick="CopyToClipboard('tag19575');return false;" class="tag-decoration">release-v0</div><div id="tag18757" onclick="CopyToClipboard('tag18757');return false;" class="tag-decoration">release-v0.31</div><div id="tag9379" onclick="CopyToClipboard('tag9379');return false;" class="tag-decoration">release-v0.31.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/a157e67da5bea96087de821c54f63717f6257cfd" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/stash/actions/runs/25988081820" target="_blank">2026-05-17 10:16:24</a></td></tr>
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

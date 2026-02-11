---
hide:
  - toc
title: hotio/jackett
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/jackett){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/jackett){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/jackett/jackett){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag23562" onclick="CopyToClipboard('tag23562');return false;" class="tag-decoration">release</div><div id="tag31594" onclick="CopyToClipboard('tag31594');return false;" class="tag-decoration">release-71862d0</div><div id="tag11611" onclick="CopyToClipboard('tag11611');return false;" class="tag-decoration">release-0.24.1094</div><div id="tag19579" onclick="CopyToClipboard('tag19579');return false;" class="tag-decoration">release-v0</div><div id="tag21541" onclick="CopyToClipboard('tag21541');return false;" class="tag-decoration">release-v0.24</div><div id="tag30178" onclick="CopyToClipboard('tag30178');return false;" class="tag-decoration">release-v0.24.1094</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/71862d0407edf01cd0886bbf28d5741cedd45a5b" target="_blank">Version update: 0.24.1089 => 0.24.1094</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21894816660" target="_blank">2026-02-11 06:16:45</a></td></tr>
<tr><td><div id="tag17462" onclick="CopyToClipboard('tag17462');return false;" class="tag-decoration">testing</div><div id="tag21697" onclick="CopyToClipboard('tag21697');return false;" class="tag-decoration">testing-cf0f4fc</div><div id="tag16405" onclick="CopyToClipboard('tag16405');return false;" class="tag-decoration">testing-0.24.1094</div><div id="tag11045" onclick="CopyToClipboard('tag11045');return false;" class="tag-decoration">testing-v0</div><div id="tag21608" onclick="CopyToClipboard('tag21608');return false;" class="tag-decoration">testing-v0.24</div><div id="tag16497" onclick="CopyToClipboard('tag16497');return false;" class="tag-decoration">testing-v0.24.1094</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/cf0f4fc04f45e059d84ea42e5822090c296a65da" target="_blank">Version update: 0.24.1089 => 0.24.1094</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21894817113" target="_blank">2026-02-11 06:16:46</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="jackett" \
        -p 9117:9117 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="9117/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/jackett
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      jackett:
        container_name: jackett
        image: ghcr.io/hotio/jackett
        ports:
          - "9117:9117"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=9117/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"

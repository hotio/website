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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag24064" onclick="CopyToClipboard('tag24064');return false;" class="tag-decoration">release</div><div id="tag14414" onclick="CopyToClipboard('tag14414');return false;" class="tag-decoration">release-67d3b45</div><div id="tag5783" onclick="CopyToClipboard('tag5783');return false;" class="tag-decoration">release-0.24.2116</div><div id="tag7190" onclick="CopyToClipboard('tag7190');return false;" class="tag-decoration">release-v0</div><div id="tag14866" onclick="CopyToClipboard('tag14866');return false;" class="tag-decoration">release-v0.24</div><div id="tag28254" onclick="CopyToClipboard('tag28254');return false;" class="tag-decoration">release-v0.24.2116</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/67d3b458e3b61b19ae2587c17da9aa26558be9f1" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/28080172866" target="_blank">2026-06-24 06:38:08</a></td></tr>
<tr><td><div id="tag28666" onclick="CopyToClipboard('tag28666');return false;" class="tag-decoration">testing</div><div id="tag22462" onclick="CopyToClipboard('tag22462');return false;" class="tag-decoration">testing-754053e</div><div id="tag9265" onclick="CopyToClipboard('tag9265');return false;" class="tag-decoration">testing-0.24.2110</div><div id="tag12920" onclick="CopyToClipboard('tag12920');return false;" class="tag-decoration">testing-v0</div><div id="tag21481" onclick="CopyToClipboard('tag21481');return false;" class="tag-decoration">testing-v0.24</div><div id="tag18994" onclick="CopyToClipboard('tag18994');return false;" class="tag-decoration">testing-v0.24.2110</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/754053ea1d40f6ecf006ba97abb4db4d36bac8d0" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/28007499242" target="_blank">2026-06-23 06:41:38</a></td></tr>
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

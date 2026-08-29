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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag32089" onclick="CopyToClipboard('tag32089');return false;" class="tag-decoration">release</div><div id="tag8416" onclick="CopyToClipboard('tag8416');return false;" class="tag-decoration">release-70f2bbe</div><div id="tag16941" onclick="CopyToClipboard('tag16941');return false;" class="tag-decoration">release-0.24.2489</div><div id="tag8177" onclick="CopyToClipboard('tag8177');return false;" class="tag-decoration">release-v0</div><div id="tag18947" onclick="CopyToClipboard('tag18947');return false;" class="tag-decoration">release-v0.24</div><div id="tag4281" onclick="CopyToClipboard('tag4281');return false;" class="tag-decoration">release-v0.24.2489</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/70f2bbe42f445c53d602be4b436a309bbada58ce" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/33246173426" target="_blank">2026-08-29 09:44:01</a></td></tr>
<tr><td><div id="tag22903" onclick="CopyToClipboard('tag22903');return false;" class="tag-decoration">testing</div><div id="tag24030" onclick="CopyToClipboard('tag24030');return false;" class="tag-decoration">testing-40b9849</div><div id="tag20596" onclick="CopyToClipboard('tag20596');return false;" class="tag-decoration">testing-0.24.2489</div><div id="tag13865" onclick="CopyToClipboard('tag13865');return false;" class="tag-decoration">testing-v0</div><div id="tag5753" onclick="CopyToClipboard('tag5753');return false;" class="tag-decoration">testing-v0.24</div><div id="tag7311" onclick="CopyToClipboard('tag7311');return false;" class="tag-decoration">testing-v0.24.2489</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/40b98498631dd86d8e44544164da716bf1cdbf9b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/33246173716" target="_blank">2026-08-29 09:44:01</a></td></tr>
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

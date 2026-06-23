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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag16343" onclick="CopyToClipboard('tag16343');return false;" class="tag-decoration">release</div><div id="tag16997" onclick="CopyToClipboard('tag16997');return false;" class="tag-decoration">release-9a04da5</div><div id="tag10526" onclick="CopyToClipboard('tag10526');return false;" class="tag-decoration">release-0.24.2110</div><div id="tag10250" onclick="CopyToClipboard('tag10250');return false;" class="tag-decoration">release-v0</div><div id="tag19593" onclick="CopyToClipboard('tag19593');return false;" class="tag-decoration">release-v0.24</div><div id="tag23756" onclick="CopyToClipboard('tag23756');return false;" class="tag-decoration">release-v0.24.2110</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/9a04da5bc2710f29b6d4861ebd15de25d3b231c2" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/28007495955" target="_blank">2026-06-23 06:41:32</a></td></tr>
<tr><td><div id="tag12838" onclick="CopyToClipboard('tag12838');return false;" class="tag-decoration">testing</div><div id="tag20295" onclick="CopyToClipboard('tag20295');return false;" class="tag-decoration">testing-754053e</div><div id="tag28549" onclick="CopyToClipboard('tag28549');return false;" class="tag-decoration">testing-0.24.2110</div><div id="tag8613" onclick="CopyToClipboard('tag8613');return false;" class="tag-decoration">testing-v0</div><div id="tag1103" onclick="CopyToClipboard('tag1103');return false;" class="tag-decoration">testing-v0.24</div><div id="tag3788" onclick="CopyToClipboard('tag3788');return false;" class="tag-decoration">testing-v0.24.2110</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/754053ea1d40f6ecf006ba97abb4db4d36bac8d0" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/28007499242" target="_blank">2026-06-23 06:41:38</a></td></tr>
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

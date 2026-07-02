---
hide:
  - toc
title: hotio/whisparr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/whisparr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/whisparr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project v2](https://github.com/whisparr/whisparr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-link-16: Upstream Project v3](https://github.com/whisparr/whisparr-eros){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag3061" onclick="CopyToClipboard('tag3061');return false;" class="tag-decoration">v2</div><div id="tag7699" onclick="CopyToClipboard('tag7699');return false;" class="tag-decoration">v2-d4510d1</div><div id="tag29252" onclick="CopyToClipboard('tag29252');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag19172" onclick="CopyToClipboard('tag19172');return false;" class="tag-decoration">v2-v2</div><div id="tag21955" onclick="CopyToClipboard('tag21955');return false;" class="tag-decoration">v2-v2.2</div><div id="tag13449" onclick="CopyToClipboard('tag13449');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/d4510d1075956091a4e71a143511ed65e614bf7c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/28591500977" target="_blank">2026-07-02 12:52:53</a></td></tr>
<tr><td><div id="tag34" onclick="CopyToClipboard('tag34');return false;" class="tag-decoration">v2-develop</div><div id="tag18803" onclick="CopyToClipboard('tag18803');return false;" class="tag-decoration">v2-develop-f89e86e</div><div id="tag25301" onclick="CopyToClipboard('tag25301');return false;" class="tag-decoration">v2-develop-2.2.0-develop.135</div><div id="tag22621" onclick="CopyToClipboard('tag22621');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag15963" onclick="CopyToClipboard('tag15963');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag29751" onclick="CopyToClipboard('tag29751');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/f89e86e6e83b59aa19c3ec0cb2fad495892cb9be" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/28446312286" target="_blank">2026-06-30 13:01:57</a></td></tr>
<tr><td><div id="tag29074" onclick="CopyToClipboard('tag29074');return false;" class="tag-decoration">v3</div><div id="tag16539" onclick="CopyToClipboard('tag16539');return false;" class="tag-decoration">v3-c514abc</div><div id="tag27678" onclick="CopyToClipboard('tag27678');return false;" class="tag-decoration">v3-3.3.4-release.794</div><div id="tag2951" onclick="CopyToClipboard('tag2951');return false;" class="tag-decoration">v3-v3</div><div id="tag10766" onclick="CopyToClipboard('tag10766');return false;" class="tag-decoration">v3-v3.3</div><div id="tag12479" onclick="CopyToClipboard('tag12479');return false;" class="tag-decoration">v3-v3.3.4</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/c514abcc95b2d169b93f9aa8c6e4846252f8008c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/28591501776" target="_blank">2026-07-02 12:52:54</a></td></tr>
<tr><td><div id="tag191" onclick="CopyToClipboard('tag191');return false;" class="tag-decoration">v3-develop</div><div id="tag6704" onclick="CopyToClipboard('tag6704');return false;" class="tag-decoration">v3-develop-36cff46</div><div id="tag959" onclick="CopyToClipboard('tag959');return false;" class="tag-decoration">v3-develop-3.3.4-develop.798</div><div id="tag31018" onclick="CopyToClipboard('tag31018');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag10779" onclick="CopyToClipboard('tag10779');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag19933" onclick="CopyToClipboard('tag19933');return false;" class="tag-decoration">v3-develop-v3.3.4</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/36cff468dc5db31504de3d247af36cf37e075201" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/28591500334" target="_blank">2026-07-02 12:52:52</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="whisparr" \
        -p 6969:6969 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="6969/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/whisparr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      whisparr:
        container_name: whisparr
        image: ghcr.io/hotio/whisparr
        ports:
          - "6969:6969"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=6969/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"

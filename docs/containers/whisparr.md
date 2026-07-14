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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag8258" onclick="CopyToClipboard('tag8258');return false;" class="tag-decoration">v2</div><div id="tag26264" onclick="CopyToClipboard('tag26264');return false;" class="tag-decoration">v2-632fb9e</div><div id="tag26449" onclick="CopyToClipboard('tag26449');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag5271" onclick="CopyToClipboard('tag5271');return false;" class="tag-decoration">v2-v2</div><div id="tag14563" onclick="CopyToClipboard('tag14563');return false;" class="tag-decoration">v2-v2.2</div><div id="tag31386" onclick="CopyToClipboard('tag31386');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/632fb9ea6b0ab4d2b56c6eda018d51ac5d16db60" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/28978568972" target="_blank">2026-07-08 21:57:03</a></td></tr>
<tr><td><div id="tag9758" onclick="CopyToClipboard('tag9758');return false;" class="tag-decoration">v2-develop</div><div id="tag11500" onclick="CopyToClipboard('tag11500');return false;" class="tag-decoration">v2-develop-ecc443e</div><div id="tag18981" onclick="CopyToClipboard('tag18981');return false;" class="tag-decoration">v2-develop-2.2.0-develop.141</div><div id="tag24294" onclick="CopyToClipboard('tag24294');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag21731" onclick="CopyToClipboard('tag21731');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag1200" onclick="CopyToClipboard('tag1200');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/ecc443e1429bf2edf2d71e2868f960ab9424d0f4" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/29313202597" target="_blank">2026-07-14 07:01:43</a></td></tr>
<tr><td><div id="tag25384" onclick="CopyToClipboard('tag25384');return false;" class="tag-decoration">v3</div><div id="tag1510" onclick="CopyToClipboard('tag1510');return false;" class="tag-decoration">v3-e0ef204</div><div id="tag7654" onclick="CopyToClipboard('tag7654');return false;" class="tag-decoration">v3-3.3.4-release.794</div><div id="tag13394" onclick="CopyToClipboard('tag13394');return false;" class="tag-decoration">v3-v3</div><div id="tag10199" onclick="CopyToClipboard('tag10199');return false;" class="tag-decoration">v3-v3.3</div><div id="tag20967" onclick="CopyToClipboard('tag20967');return false;" class="tag-decoration">v3-v3.3.4</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/e0ef204e031cbdf4b3fe866663d102abb69d6df5" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/29313202625" target="_blank">2026-07-14 07:01:44</a></td></tr>
<tr><td><div id="tag20862" onclick="CopyToClipboard('tag20862');return false;" class="tag-decoration">v3-develop</div><div id="tag6719" onclick="CopyToClipboard('tag6719');return false;" class="tag-decoration">v3-develop-f815a73</div><div id="tag27505" onclick="CopyToClipboard('tag27505');return false;" class="tag-decoration">v3-develop-3.3.4-develop.808</div><div id="tag15450" onclick="CopyToClipboard('tag15450');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag598" onclick="CopyToClipboard('tag598');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag5415" onclick="CopyToClipboard('tag5415');return false;" class="tag-decoration">v3-develop-v3.3.4</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/f815a73ae8416334da49030948a5814c74b7c147" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/29206867147" target="_blank">2026-07-12 19:59:52</a></td></tr>
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

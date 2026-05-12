---
hide:
  - toc
title: hotio/unpackerr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/unpackerr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/unpackerr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/davidnewhall/unpackerr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag27165" onclick="CopyToClipboard('tag27165');return false;" class="tag-decoration">nightly</div><div id="tag21761" onclick="CopyToClipboard('tag21761');return false;" class="tag-decoration">nightly-4ee32e1</div><div id="tag22526" onclick="CopyToClipboard('tag22526');return false;" class="tag-decoration">nightly-d6fdf16efdfc29fd22543ba74c8aad6f2d06ee59</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/4ee32e191c972b0b6eb45c2ea6aaa31c82b30472" target="_blank">Upstream or Packages File update</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/25715055411" target="_blank">2026-05-12 05:19:46</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag9000" onclick="CopyToClipboard('tag9000');return false;" class="tag-decoration">release</div><div id="tag228" onclick="CopyToClipboard('tag228');return false;" class="tag-decoration">release-5ed750c</div><div id="tag22581" onclick="CopyToClipboard('tag22581');return false;" class="tag-decoration">release-0.15.2</div><div id="tag14456" onclick="CopyToClipboard('tag14456');return false;" class="tag-decoration">release-v0</div><div id="tag7300" onclick="CopyToClipboard('tag7300');return false;" class="tag-decoration">release-v0.15</div><div id="tag23645" onclick="CopyToClipboard('tag23645');return false;" class="tag-decoration">release-v0.15.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/5ed750cfd37e1c520e5553d2cecdec57ee4c28f1" target="_blank">Upstream or Packages File update</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/25715056204" target="_blank">2026-05-12 05:19:49</a></td></tr>
<tr><td><div id="tag23536" onclick="CopyToClipboard('tag23536');return false;" class="tag-decoration">testing</div><div id="tag6697" onclick="CopyToClipboard('tag6697');return false;" class="tag-decoration">testing-c43c450</div><div id="tag3614" onclick="CopyToClipboard('tag3614');return false;" class="tag-decoration">testing-0.15.2</div><div id="tag285" onclick="CopyToClipboard('tag285');return false;" class="tag-decoration">testing-v0</div><div id="tag25000" onclick="CopyToClipboard('tag25000');return false;" class="tag-decoration">testing-v0.15</div><div id="tag12997" onclick="CopyToClipboard('tag12997');return false;" class="tag-decoration">testing-v0.15.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/c43c450d5dde62a40627a5ac189645b2011c2059" target="_blank">Upstream or Packages File update</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/25715057582" target="_blank">2026-05-12 05:19:51</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="unpackerr" \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/unpackerr
    ```

=== "compose"

    ```yaml linenums="1"
    services:
      unpackerr:
        container_name: unpackerr
        image: ghcr.io/hotio/unpackerr
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

## Configuration

You can use docker environment variables or a configuration file that should be stored in `/config/unpackerr.conf`. Take a look at the [upstream](https://github.com/davidnewhall/unpackerr){ target="_blank" rel="noopener" } project page for info on how to configure Unpackerr.

--8<-- "includes/wireguard.md"
